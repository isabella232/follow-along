from follow import ma
from marshmallow import fields


# This schema is to display a Meeting Model
class MeetingSchema(ma.Schema):
    name = fields.Str(required=True)
    description = fields.Str(required=True)
    date = fields.Date(required=True)
    time = fields.Time(required=True)

    class Meta:
        # Fields to show when sending data
        fields = ("name", "description", "date", "time")
        ordered = True


# This schema is used to validate data to create/edit a meeting
class MeetingFormSchema(ma.Schema):
    name = fields.Str(required=True)
    description = fields.Str(required=True)
    attendee_pw = fields.Str(required=True)
    moderator_pw = fields.Str(required=True)

    class Meta:
        # Fields to show when sending data
        fields = ("name", "description", "attendee_pw", "moderator_pw")
        ordered = True


meeting_schema = MeetingSchema()
meeting_form_schema = MeetingFormSchema()
