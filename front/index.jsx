// Globally import the bootstrap css
//import 'bootstrap/dist/css/bootstrap.css';
// React modules
import React from 'react'
import { render } from 'react-dom'

// Import Actions
import SudokuActions from 'flux/SudokuActions';
// Import Stores
import SudokuStore from 'flux/SudokuStore';

// Our root component handling routing in the application
import AppRouter from 'components/AppRouter.jsx'

import './assets/styles/styles.css'

render((<AppRouter/>), document.getElementById('app'))
