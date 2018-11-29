import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Combobox extends Component {

    constructor(props) {
        super(props)
        this.handleChangeTextfield = this.handleChangeTextfield.bind(this)
        this.handleChooseOption = this.handleChooseOption.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.handleShowOptions = this.handleShowOptions.bind(this)
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        onChange: PropTypes.func,
        options: PropTypes.array.isRequired,
    }

    state = {
        optionsVisible: false,
        currentOptions: this.filterOptions(this.props.value), 
        currentOptionName: ''
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)

        let currentOptionName
        if(!this.props.value) {
            currentOptionName = ''
        } else {
            currentOptionName = this.findOptionValue(this.props.value)
        }

        this.setState({currentOptionName})
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    setWrapperRef(node) {
        this.wrapperRef = node
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({optionsVisible: false})
        }
    }

    filterOptions(value) {

        let filteredOptions = []

        if(value) {
            filteredOptions = this.props.options.filter((option) => {
                if(option.name.toLowerCase().search(value.toLowerCase()) !== -1) {
                    return option
                }
            })
        } else {
            filteredOptions = this.props.options
        }

        return filteredOptions
    }

    handleChangeTextfield(e) {
        const value = e.target.value
        let filteredOptions = this.filterOptions(value)
        
        this.setState({
            currentOptions: filteredOptions,
            optionsVisible: true, 
            currentOptionName: value
        })

        if(!value) {
            this.props.onChange(e)
        }

    }

    handleShowOptions(e) {
        this.setState({optionsVisible: true})
    }

    handleChooseOption(e) {
        this.setState({
            optionsVisible: false, 
            currentOptions: this.filterOptions(e.target.value),
            currentOptionName: e.target.id
        })
        this.props.onChange(e)
    }

    findOptionValue(value) {
        let searchedOption = this.props.options.find((option) => {
            return option.value === value
        })

        return (searchedOption) ? searchedOption.name : value
    }
    
 
    render() {

      const { 
        name,
        label, 
        placeholder, 
        required = (this.props.required) ? 'required' : null
      } = this.props

      const optionItems = this.state.currentOptions.map((option, index) => {
          return <button key={index} className="combobox-option" id={option.name} name={name} value={option.value} onClick={this.handleChooseOption} >{option.name}</button>
      })

      return (
        <div className="form-input">
            <label htmlFor={name} >{label}</label>
            <input 
                type="text"
                name={name} 
                value={this.state.currentOptionName} 
                placeholder={placeholder}
                required={required}
                className="combobox"
                onClick={this.handleShowOptions}
                onChange={this.handleChangeTextfield}
            />
            {
              (this.state.optionsVisible) &&
                <div className="combobox-options" ref={this.setWrapperRef}>
                    {optionItems}
                </div>
            }
          <div className="error-message"></div>
        </div>
      )
    }
  }
  
  export default Combobox