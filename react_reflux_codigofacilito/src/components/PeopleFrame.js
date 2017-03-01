import React from 'react';

import PeoplePhoto from './PeoplePhoto.js';
import PeopleTitle from './PeopleTitle.js';

export default class PeopleFrame extends React.Component {

  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <PeoplePhoto/>
        <PeopleTitle/>
      </div>
    );
  }
}