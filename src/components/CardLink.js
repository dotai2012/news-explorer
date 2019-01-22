import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import _ from 'lodash';
import moment from 'moment';

export default function CardLink(props) {
  const {
    url, imgSrc, title, date, description, author,
  } = props;
  return (
    <Card as='a' href={url} target='_blank' className='card-link'>
      <Image src={imgSrc} />
      <Card.Content>
        <Card.Header><h2>{title}</h2></Card.Header>
        <Card.Meta>
          <span className='date'>{moment.utc(date).format('DD-MM-YYYY')}</span>
        </Card.Meta>
        <Card.Description>{_.truncate(description, {
          length: 80,
          separator: /,? +/,
        })}</Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Icon name='user' />
          {author}
      </Card.Content>
    </Card>
  );
}
