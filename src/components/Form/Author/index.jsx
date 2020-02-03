import React from 'react';
import PropTypes from 'prop-types';

class Author extends React.Component {
  render() {
    return (
      <div>
        Author:&nbsp;
        <input type="text"
          defaultValue={this.props.author && this.props.author.name}
          onBlur={(e) => {
            this.props.onChangeAuthor(
              this.props.author && this.props.author.id,
              e.target.value,
              this.props.author && this.props.author.affiliations);
            if (!this.props.author || !this.props.author.id) {
              e.target.value  = '';
            }
          }} />
        &nbsp;
        Affiliations:
        <select
          multiple={true}
          defaultValue={this.props.author && this.props.author.affiliations ? this.props.author.affiliations : []}
          onChange={(e) => {
            const selectedOptions = [];
            for(let i = 0; i < e.target.options.length; i++) {
              const option = e.target.options[i];
              if (option.selected) {
                selectedOptions.push(option.value);
                if (!this.props.author || !this.props.author.id) {
                  option.selected = false;
                }
              }
            }
            this.props.onChangeAuthor(
              this.props.author && this.props.author.id, 
              this.props.author && this.props.author.name,
              selectedOptions)
          }
        }>
          {Object.keys(this.props.affiliations).map(id => (
            <option
              key={id}
              value={id}>
              {this.props.affiliations[id]}
            </option>
          ))}
        </select>
      </div>

    );
  }
}

Author.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    affiliationIds: PropTypes.arrayOf(PropTypes.string)
  }),
  affiliations: PropTypes.object,
  onChangeAuthor: PropTypes.func,
}

export default Author;
