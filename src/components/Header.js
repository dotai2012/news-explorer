import React, { Component } from 'react';
import {
  Container,
  Menu,
  Visibility,
  Input,
  Button,
} from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';
import { getCookie, setCookie } from '../services/cookie';

@connect(null, { fetchNews })
class Header extends Component {
  componentDidMount() {
    const topic = getCookie('topic');
    if (topic === '') {
      const expireDate = moment().add(1, 'day').utc();
      setCookie('bitcoin', expireDate, '/');
      this.setState({ search: 'bitcoin' }, () => {
        this.onSearch();
      });
    } else {
      this.setState({ search: topic }, () => {
        this.onSearch();
      });
    }
  }

  state = {
    menuFixed: false,
    search: '',
  }

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  onSearch = () => {
    this.props.fetchNews(this.state.search);
    const expireDate = moment().add(1, 'day').utc();
    setCookie(this.state.search, expireDate, '/');
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onSearch();
    }
  }

  render() {
    const { menuFixed } = this.state;

    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          borderless
          fixed={menuFixed ? 'top' : undefined}
          className={menuFixed ? 'fixed-menu' : 'normal-menu'}
        >
          <Container text>
            <Menu.Item header>News Explorer</Menu.Item>
            <Menu.Item as={ Link } to='/'>Home</Menu.Item>
            <Menu.Item as={ Link } to='/about'>About</Menu.Item>
            <Input name='search' icon='search' iconPosition='left' placeholder='Search...' value={this.state.search} onChange={this.onInputChange} onKeyPress={this.onInputKeyPress} />
            <Menu.Item as={ Button } onClick={this.onSearch}>Search</Menu.Item>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}

export default Header;
