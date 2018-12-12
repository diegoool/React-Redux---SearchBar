import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Page from './page'

import findSuggestions from '../../redux/actions/findSuggestions'
import findResults from '../../redux/actions/findResults'

class IAppBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }

    // Siempre bind cuando se pasa a otro componente

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSelection = this.onChangeSelection.bind(this);

  }



  onChangeText(text){
    this.setState({text});
    this.props.findSuggestions(text);
  }
  
  onChangeSelection(text){
    this.setState({text});
    this.props.findResults(text);

    this.props.history.push('/results')
    
  }

  render() {
    const { text } =  this.state
    const { suggestions } =  this.props
    return (
      <Page
        text={text}
        suggestions={suggestions}
        onChangeSelection={this.onChangeSelection}
        onChangeText={this.onChangeText}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    suggestions: state.suggestions
  }
}
 const mapDispatchToProps = {
    findSuggestions,
    findResults
 }
 
//  const mapDispatchToProps = (dispatch) => {
//    return {
//     findSuggestions: text => dispatch(findSuggestions(text))
//    }
//  }

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);
