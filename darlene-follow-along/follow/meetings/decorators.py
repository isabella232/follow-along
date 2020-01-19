from follow.models import Meeting
from functools import wraps


# Decorator to check if a meeting exists
def meeting_exists(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        meeting = Meeting.query.get(kwargs['meeting_id'])

        if meeting:
            return f(*args, **kwargs)
        else:
            return {
                       "message": "Meeting does not exist"
                   }, 404

    return wrap
