import React, { Component } from 'react';
import Select from 'react-select';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.options = [
            { value: 'one', label: 'Last Day', availability: 'true' },
            { value: 'seven', label: 'Last 7 Days', availability: 'false' },
            { value: 'twentyEight', label: 'Last 28 Days', availability: 'false' },
            { value: 'oneEighty', label: 'Last 180 Days', availability: 'false' }
        ];
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (dropdownSelection) => {
        this.props.handleChange(dropdownSelection); 
        //alert(dropdownSelection.value);
    }
    render() {       
        return(
                <Select 
                    defaultValue={this.options[0]}
                    options={this.options} 
                    className="dropdownWrap" 
                    classNamePrefix="dropdown" 
                    onChange={this.handleChange}
                />
            );
    }
}
export default Dropdown;