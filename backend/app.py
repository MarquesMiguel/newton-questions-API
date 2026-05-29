from flask import Flask, render_template, url_for, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

#ss
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///questions.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Questions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(200))
    answer = db.Column(db.String(200))
    fake_one = db.Column(db.String(200))
    fake_two = db.Column(db.String(200))
    fake_three = db.Column(db.String(200))

    def __init__(self, question, answer, fake_one, fake_two, fake_three):
        self.question = question
        self.answer = answer
        self.fake_one = fake_one
        self.fake_two = fake_two
        self.fake_three = fake_three

@app.route('/questions/<int:id>', methods=['GET'])
def get_question(id):
    question = Questions.query.get(id)
    if question:
        return jsonify({
            "id": question.id,
            "question": question.question,
            "answer": question.answer,
            "fake_one": question.fake_one,
            "fake_two": question.fake_two,
            "fake_three": question.fake_three

        })
    return jsonify({"message": "question not found"}), 404

@app.route('/questions', methods=['POST'])
def post_question():
    data = request.json
    question = data.get("question")
    answer = data.get("answer")
    fake_one = data.get("fake_one")
    fake_two = data.get("fake_two")
    fake_three = data.get("fake_three")
    if question and answer and fake_one and fake_two and fake_three:
        new_question = Questions(question=question, answer=answer, fake_one=fake_one, fake_two=fake_two, fake_three=fake_three)
        db.session.add(new_question)
        db.session.commit()
        return jsonify({"message": "question posted"})
    return jsonify({"message": "missing atributtes"}), 400

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run()