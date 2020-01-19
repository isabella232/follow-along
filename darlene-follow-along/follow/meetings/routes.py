from flask import Blueprint, request, redirect
from flask_restful import Resource
from follow import api, db
from follow.meetings.decorators import meeting_exists
from follow.meetings.schemas import meeting_form_schema
from follow.meetings.utils import create_bbb_invite, create_bbb_meeting, create_meeting, edit_meeting
from follow.models import Meeting
import requests

# Blueprint for meetings
meetings_bp = Blueprint("meetings", __name__)


class MeetingCRUD(Resource):
    method_decorators = [meeting_exists]

    # Function to get a meeting for a guest
    def get(self, meeting_id):
        form_data = request.get_json()
        meeting = Meeting.query.get(meeting_id)
        url = create_bbb_invite(form_data, meeting)
        print(url)

        return redirect(url)

    # Function to delete a meeting
    def put(self, meeting_id):
        form_data = request.get_json()
        meeting = Meeting.query.get(meeting_id)
        edit_meeting(meeting, form_data)

        db.session.commit()

        return {"message": "Meeting successfully updated"}, 200

    # Function to delete a meeting
    def delete(self, meeting_id):
        meeting = Meeting.query.get(meeting_id)

        db.session.delete(meeting)
        db.session.commit()


class MeetingCreate(Resource):
    # Function to create a meeting
    def post(self):
        form_data = request.get_json()
        errors = meeting_form_schema.validate(form_data)

        # If form data is not validated by the meeting_schema, then return a 500 error
        # else create the meeting and add it to the database
        if errors:
            return {
                       "message": "Missing or sending incorrect data to create a meeting. Double check the JSON data that it has everything needed to create a meeting."
                   }, 500
        else:
            meeting = create_meeting(form_data)
            url = create_bbb_meeting(form_data, meeting[1])
            create_bbb = requests.get(url)
            db.session.add(meeting[0])
            db.session.commit()
            print(meeting[0].id)
            print(create_bbb.text)
        return {"message": "Meeting successfully created"}, 201


api.add_resource(MeetingCRUD, "/meetings/<int:meeting_id>")
api.add_resource(MeetingCreate, "/meetings/create")
