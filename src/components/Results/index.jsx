import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

class Results extends React.Component {

  generateAuthorList(authors, affiliations) {
    let author;
    let sortedAuthors = [];
    let sortedAffiliations = [];
    authors.sort(a => a.name).forEach(a => {
      const author = {
        ...a,
        affiliations: [],
      };
      const affiliationsForAuthor = [];
      a.affiliations && a.affiliations.forEach(a => {
        affiliationsForAuthor.push({
          id: a,
          text: affiliations[a],
        });
      });
      affiliationsForAuthor.sort(af => af.text).forEach(af => {
        if (!sortedAffiliations.includes(af)) {
          af.key = sortedAffiliations.length;
          sortedAffiliations.push(af);
        }
      });

      author.affiliations = affiliationsForAuthor;
      sortedAuthors.push(author);
    });

    return {
      authors: sortedAuthors,
      affiliations: sortedAffiliations,
    }
  }

  renderAuthorList(authors) {
    return Object.keys(authors).map(author => (
      <div>
        {authors[author].name}
        <span className={styles.supertext}>
          {authors[author].affiliations.map(a => (a.key)).join(', ').toString()}
        </span>
      </div>
    ));
  }

  renderAffiliations(affiliations) {
    const renderedAffiliations = [];
    for(let i = 0; i < affiliations.length; i++) {
      renderedAffiliations.push(
        <div>
          {i}. {affiliations[i].text}
        </div>
      );
    }
    return renderedAffiliations;
  }

  render() {
    var results = this.generateAuthorList(this.props.authors, this.props.affiliations);
    return (
      <div>
        <div>
          {this.renderAuthorList(results.authors)}
        </div>
        <div>
          {this.renderAffiliations(results.affiliations)}
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    affiliationIds: PropTypes.arrayOf(PropTypes.string),
  })),
  affiliations: PropTypes.object,
}

export default Results;
