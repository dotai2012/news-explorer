import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CardLink from '../components/CardLink';

const mapStateToProps = ({ articles }) => ({
  articles,
});

@connect(mapStateToProps)
class Home extends Component {
  renderArticles = () => (
      <React.Fragment>
          {this.props.articles.map((group, indexGroup) => {
            if (indexGroup === 0) {
              return (
                <Grid.Row columns={2} key={indexGroup} className='grid-row'>
                  {group.map(({
                    url, urlToImage, title, publishedAt, description, author,
                  }, index) => (
                      <Grid.Column key={index}>
                        <CardLink url={url} imgSrc={urlToImage} title={title} date={publishedAt} description={description} author={author} />
                      </Grid.Column>
                  ))}
                </Grid.Row>
              );
            }
            return (
                <Grid.Row columns={3} key={indexGroup} className='grid-row'>
                  {group.map(({
                    url, urlToImage, title, publishedAt, description, author,
                  }, index) => (
                      <Grid.Column key={index}>
                      <CardLink url={url} imgSrc={urlToImage} title={title} date={publishedAt} description={description} author={author} />
                      </Grid.Column>
                  ))}
                </Grid.Row>
            );
          })}
      </React.Fragment>
  )

  render() {
    return (
      <Grid>
        {this.renderArticles()}
        {console.log(this.props.articles)}
      </Grid>
    );
  }
}

export default Home;
