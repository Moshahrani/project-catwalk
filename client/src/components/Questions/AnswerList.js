import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { answers } = this.props;
    return (
      <div>
        <p>A:</p>
        {answers.map((answer) => <Answer key={answer.answer_id} answer={answer} />)}
        {answers.length > 2 ? <button type="button" className="loadAnswers">Load more answers</button> : ''}
      </div>
    );
  }
}

AnswerList.propTypes = {
  // questionId: PropTypes.number, for later, when doing get requests
  answers: PropTypes.arrayOf(PropTypes.shape({
    answer_id: PropTypes.number,
    body: PropTypes.string,
    date: PropTypes.string,
    answerer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    })),
  })),
};

AnswerList.defaultProps = {
  // questionId: 84312,
  answers: [
    {
      answer_id: 800553,
      body: 'Alias libero voluptas adipisci et quam iure vel.',
      date: '2020-04-23T00:00:00.000Z',
      answerer_name: 'Kenton_Gleason',
      helpfulness: 17,
      photos: [
        {
          id: 682123,
          url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 682124,
          url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      answer_id: 800555,
      body: 'Pariatur accusamus vitae sit in corrupti dolor ut ab.',
      date: '2020-09-21T00:00:00.000Z',
      answerer_name: 'Kelvin8',
      helpfulness: 16,
      photos: [],
    },
    {
      answer_id: 800557,
      body: 'Quam aut cumque.',
      date: '2020-06-10T00:00:00.000Z',
      answerer_name: 'Darrion.Stehr99',
      helpfulness: 12,
      photos: [],
    },
    {
      answer_id: 800556,
      body: 'Molestiae excepturi harum ab ipsam.',
      date: '2020-11-14T00:00:00.000Z',
      answerer_name: 'Cyrus.Bernhard94',
      helpfulness: 11,
      photos: [
        {
          id: 682126,
          url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
    },
    {
      answer_id: 800561,
      body: 'Voluptates ratione optio quo qui nemo.',
      date: '2020-05-28T00:00:00.000Z',
      answerer_name: 'Eleanora11',
      helpfulness: 10,
      photos: [],
    },
  ],
};

export default AnswerList;
