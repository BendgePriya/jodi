import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

const minAgeRange = [
  {
    value: '20',
    label: '20',
  },
  {
    value: '22',
    label: '22',
  },
  {
    value: '24',
    label: '24',
  },
];
const maxAgeRange = [
    {
      value: '32',
      label: '32',
    },
    {
      value: '34',
      label: '34',
    },
    {
      value: '36',
      label: '36',
    },
  ];
const minIncomeRange = [
{
  value: '0-20',
  label: '0 to 20',
},
{
  value: '21-50',
  label: '21 to 50',
},
{
  value: '51-100',
  label: '51 to 100',
},
];
const maxIncomeRange = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];
const minHeightRange = [
  {
    value: '5\' 0\"',
    label: '5\' 0\"',
  },
  {
    value: '5\' 1\"',
    label: '5\' 1\"',
  },
  {
    value: '5\' 2\"',
    label: '5\' 2\"',
  },
];
const maxHeightRange = [
  {
    value: '5\' 5\"',
    label: '5\' 5\"',
  },
  {
    value: '5\' 6\"',
    label: '5\' 6\"',
  },
  {
    value: '5\' 7\"',
    label: '5\' 7\"',
  },
];
const religionList = [
  {
      value: 'Hindu',
      label: 'Hindu',
    },
    {
      value: 'Muslim',
      label: 'Muslim',
    },
]
const casteList = [
  {
      value: 'Baniya',
      label: 'Baniya',
    },
    {
      value: 'Maratha',
      label: 'maratha',
    },
]
const motherTongueList = [
  {
      value: 'Kanada',
      label: 'Kanada',
    },
    {
      value: 'Hindi',
      label: 'Hindi',
    },
]
const countryList = [
  {
      value: 'India',
      label: 'India',
    },
    {
      value: 'US',
      label: 'US',
    },
]
const cityList = [
  {
      value: 'Banglore',
      label: 'Banglore',
    },
    {
      value: 'Mumbai',
      label: 'Mumbai',
    },
]

class Search extends React.Component {
  state = {
    minAge: '',
    maxAge: '',
    minHeight: '',
    maxHeight: '',
    religion: '',
    caste: '',
    motherTongue: '',
    minIncomeRange: '',
    maxIncomeRange: '',
    country: '',
    city: '',
};

handleChange = prop => event => {
  this.setState({ [prop]: event.target.value });
};

handleClickShowPassword = () => {
  this.setState(state => ({ showPassword: !state.showPassword }));
};

render() {
  const { classes } = this.props;

  return (
    
    <div className={classes.root}>
      <TextField
        select
        label="Min Age"
        id="minAge"
        className={classNames(classes.margin, classes.textField)}
        value={this.state.minAge}
        onChange={this.handleChange('minAge')}
      >
        {minAgeRange.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
          select
          label="Max Age"
          id="maxAge"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.maxAge}
          onChange={this.handleChange('maxAge')}
        >
        {maxAgeRange.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <TextField
          select
          label="Min Height"
          id="minHeight"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.minHeight}
          onChange={this.handleChange('minHeight')}
        >
          {minHeightRange.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Max Height"
          id="maxHeight"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.maxHeight}
          onChange={this.handleChange('maxHeight')}
        >
          {maxHeightRange.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Religion"
          id="religion"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.religion}
          onChange={this.handleChange('religion')}
        >
          {religionList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Caste"
          id="caste"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.caste}
          onChange={this.handleChange('caste')}
        >
        {casteList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <TextField
          select
          label="Mother Tongue"
          id="motherTongue"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.motherTongue}
          onChange={this.handleChange('motherTongue')}
        >
        {motherTongueList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <TextField
          select
          label="Min Income(In Lacs)"
          id="minIncome"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.minIncome}
          onChange={this.handleChange('minIncome')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
          }}
        >
          {minIncomeRange.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Max Income(In Lacs)"
          id="maxIncome"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.maxIncome}
          onChange={this.handleChange('maxIncome')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
          }}
        >
          {maxIncomeRange.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Country"
          id="country"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.country}
          onChange={this.handleChange('country')}
        >
        {countryList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <TextField
          select
          label="City"
          id="city"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.city}
          onChange={this.handleChange('city')}
        >
        {cityList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
    </div>
  );
}
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search)