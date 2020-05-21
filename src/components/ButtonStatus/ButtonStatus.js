import React from 'react';
import './ButtonStatus.scss';


const ButtonStatus = ({filter, onFilter}) => {

  
  const btnarr = [{name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];

  const mappedbtn = btnarr.map(({name, label}) => {
      const isActive = name === filter; 
      const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    
    return(
      <button key={name}
      type="button"
      onClick={() => onFilter(name)}
      className={classNames}>{label}</button>
    ); 
  })

  return (
    <div>
        {mappedbtn}
    </div>
  );
}

export default ButtonStatus;
