import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { CONFIG } from './config'

export default function AuthorizationWrapper(allowedRoles) {
    return WrappedComponent => {
        class WithAuthorization extends Component {

            state = {
				isLoggedIn: false
			}
		
			static propTypes = {
				wrappedComponent: PropTypes.func
			}
		

            componentWillMount() {
    
				// doresit platnost tokenu atd. 
				const token = sessionStorage.getItem(CONFIG.STORAGE.TOKEN)
		
				if(token) {
					this.setState({ isLoggedIn: true})
				}
			}

            render() {
             
                // potreba doresit platnost tokenu - i po vyprseni this.state.isLoggedIn === true 
                if (this.state.isLoggedIn) {
					return <WrappedComponent />
				} else {
					return <Redirect to='/welcome' />
				}
            }
        }

        const mapStateToProps = (state) => {
            return {
                
            }
        }
            
        const mapDispatchToProps = (dispatch) => {
            return {
              
            }
        }

        return connect(mapStateToProps, mapDispatchToProps)(WithAuthorization);
    }
}