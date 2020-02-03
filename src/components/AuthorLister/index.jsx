import React from 'react';
import Form from 'components/Form';
import Results from 'components/Results';
import { generateHash } from 'utility';

class AuthorLister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      affiliations: {
        'adffdasfd': 'ABC abc'
      },
    };
  }

  onChangeAffiliation = (id, text) => {
    let hash = id;
    if(!hash) {
      hash = generateHash(text);
    }
    const newAffliations = {
      ...this.state.affiliations,
      [hash]: text,
    }
    this.setState({
      affiliations: newAffliations,
    });
  }

  onChangeAuthor = (id, name, affiliations = []) => {
    let hash = id;
    if(!hash) {
      hash = generateHash(name);
    }
    const newAuthors = this.state.authors;
    let found = false;
    newAuthors.map(a => {
      if (a.id == hash) {
        a.name = name;
        a.affiliations = affiliations;
        found = true;
      }
      return a;
    });
    if (!found) {
      newAuthors.push({
        id: hash,
        name,
        affiliations,
      });
    }
    this.setState({
      authors: newAuthors,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Author Affiliator
        </h1>
        <Form
          authors={this.state.authors}
          affiliations={this.state.affiliations}
          onChangeAffiliation={this.onChangeAffiliation}
          onChangeAuthor={this.onChangeAuthor}
          />
        <Results
          authors={this.state.authors}
          affiliations={this.state.affiliations}
          />
      </div>
    );
  }
}

export default AuthorLister;
