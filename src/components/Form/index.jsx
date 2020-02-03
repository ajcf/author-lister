import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';
import Affiliation from './Affiliation';

class Form extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>
            Authors
          </h1>
          {this.props.authors.map(a => (
            <Author
              author={a}
              affiliations={this.props.affiliations}
              onChangeAuthor={this.props.onChangeAuthor}
              />
          ))}
          <Author
            affiliations={this.props.affiliations}
            onChangeAuthor={this.props.onChangeAuthor} />
        </div>
        <Affiliation 
          affiliations={this.props.affiliations}
          onChangeAffiliation={this.props.onChangeAffiliation} />
      </div>
    );
  }
}

Form.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    affiliationIds: PropTypes.arrayOf(PropTypes.string)
  }),
  affiliations: PropTypes.object,
  onChangeAffiliation: PropTypes.func,
  onChangeAuthor: PropTypes.func,
}

export default Form;
