import React, { Component } from 'react';

class TextInput extends Component {

    constructor(props) {
        super(props)
        this.handleChangeTextfield = this.handleChangeTextfield.bind(this)
        this.handleChooseOption = this.handleChooseOption.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.handleShowOptions = this.handleShowOptions.bind(this)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
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
                return (option.name.search(value) !== -1) && option
            })
        } else {
            filteredOptions = this.props.options
        }

        return filteredOptions
    }

    state = {
        optionsVisible: false,
        currentOptions: this.filterOptions(this.props.value)
    }

    handleChangeTextfield(e) {
        const value = e.target.value
        let filteredOptions = this.filterOptions(value)
        
        this.setState({
            currentOptions: filteredOptions,
            optionsVisible: true
        })
        
        this.props.onChange(e)
    }

    handleShowOptions(e) {
        this.setState({optionsVisible: true})
    }

    handleChooseOption(e) {
        this.setState({
            optionsVisible: false, 
            currentOptions: this.filterOptions(e.target.value)
        })
        this.props.onChange(e)
    }
    
 
    render() {

      const { 
        name,
        type = 'text',
        label, 
        placeholder, 
        required = (this.props.required) ? 'required' : null, 
        minLength = 0, 
        maxLenght = 128,
        min, 
        max,
        value = '',
        onChange 
      } = this.props


      const optionItems = this.state.currentOptions.map((option, index) => {
          return <button key={index} className="text-input-plus-option" name={name} value={option.value} onClick={this.handleChooseOption} >{option.name}</button>
      })

      return (
        <div className="form-input">
            <label htmlFor={name} >{label}</label>
            <input 
                type={type}
                name={name} 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange}
                minLength={minLength} 
                maxLength={maxLenght}
                min={min}
                max={max}
                required={required}
                className="combobox"
                onClick={this.handleShowOptions}
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
  
  export default TextInput