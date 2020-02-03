import React from 'react';
import PropTypes from 'prop-types';

class Affiliation extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Affiliations
        </h1>
        {Object.keys(this.props.affiliations).map(id => (
          <div key={id}>
            <input type="text" value={this.props.affiliations[id]} onChange={(e) => {
              this.props.onChangeAffiliation(id, e.target.value);
            }}/>
            <br/>
          </div>
        ))}
        <input type="text" onBlur={(e) => {
          !!e.target.value && this.props.onChangeAffiliation('', e.target.value);
          e.target.value = '';
        }}/>
      </div>

    );
  }
}

Affiliation.propTypes = {
  onChangeAffiliation: PropTypes.func,
  affiliations: PropTypes.object,
}

export default Affiliation;
