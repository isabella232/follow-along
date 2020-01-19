from datetime import datetime
from follow.config import BBB_SECRET
from follow.models import Meeting
import hashlib
import uuid


# Function to create an invitation link to join a bbb meeting as a guest
def create_bbb_invite(form_data, meeting):
    checked_sum = "joinfullName=" + form_data[
        "name"] + "&meetingID=" + meeting.meeting_id + "&redirect=true" + "&joinViaHtml5=true" + "&password=" + \
                  form_data["password"] + BBB_SECRET
    hashe = hashlib.sha1()
    hashe.update(str(checked_sum).encode('utf-8'))
    hashe.hexdigest()
    url_params = "fullName=" + form_data[
        "name"] + "&meetingID=" + meeting.meeting_id + "&redirect=true" + "&joinViaHtml5=true" + "&password=" + \
                 form_data["password"] + "&checksum=" + hashe.hexdigest()
    url = "https://www.followalong.io/bigbluebutton/api/join?" + url_params

    return url


# Function to create a bbb meeting request url
def create_bbb_meeting(form_data, meeting_id):
    checked_sum = "createname=" + form_data["name"] + "&welcome=Welcome+to+" + form_data["name"] + "&record=true" + "&meetingID=" + str(
        meeting_id) + "&moderatorPW=" + form_data[
                      "moderator_pw"] + "&attendeePW=" + form_data["attendee_pw"] + BBB_SECRET
    hashe = hashlib.sha1()
    hashe.update(str(checked_sum).encode('utf-8'))
    hashe.hexdigest()
    url_parameters = "name=" + form_data["name"] + "&welcome=Welcome+to+" + form_data["name"] + "&record=true" + "&meetingID=" + str(meeting_id) + "&moderatorPW=" + \
                     form_data[
                         "moderator_pw"] + "&attendeePW=" + form_data["attendee_pw"] + "&checksum=" + hashe.hexdigest()
    url = "https://www.followalong.io/bigbluebutton/api/create?" + url_parameters

    return url


# Function to create a meeting
def create_meeting(form_data):
    current_date = datetime.now().date()
    current_time = datetime.now().time()
    meeting_id = uuid.uuid1()

    meeting = Meeting(name=form_data["name"],
                      description=form_data["description"],
                      date=current_date,
                      time=current_time,
                      meeting_id=meeting_id
                      )

    return meeting, meeting_id


# Function to update a meeting
def edit_meeting(meeting, form_data):
    meeting.name = form_data["name"]
    meeting.description = form_data["description"]

    return
