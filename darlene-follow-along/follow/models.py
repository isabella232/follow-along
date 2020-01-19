from follow import db


class Meeting(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.Time, nullable=False)
    meeting_id = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    users = db.relationship("User", back_populates="meetings")

    def __init__(self, name, description, date, time, meeting_id):
        self.name = name
        self.description = description
        self.date = date
        self.time = time
        self.meeting_id = meeting_id

    def __repr__(self):
        return f"Meeting('{self.name}')"


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    # username is the email
    username = db.Column(db.Text, unique=True, nullable=False)
    password = db.Column(db.Text, unique=True, nullable=False)
    description = db.Column(db.Text, nullable=False)
    overview = db.Column(db.Text, nullable=False)
    image = db.Column(db.Text, nullable=True)
    meetings = db.relationship("Meeting", cascade="all,delete", back_populates="users")

    def __repr__(self):
        return f"User('{self.username}')"
