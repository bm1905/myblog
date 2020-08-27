import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Dropdown from 'react-dropdown';

const LIST_VIEW_ICONS = ['list', 'border-all'];
const DATE_FILTERING_ICONS = ['sort-numeric-down', 'sort-numeric-up'];

// const options = [
//     'one', 'two', 'threethreethreethree'
// ];
// const defaultOption = options[0];

const FilteringMenu = ({ onChange, filter }) => {

    return (
        <div className="filtering-menu mb-2">
            <FontAwesomeIcon
                className="clickable hoverable mr-3"
                size="lg"
                icon={LIST_VIEW_ICONS[filter.view.list]}
                onClick={() =>
                    onChange('view', { list: +!filter.view.list })
                }
            />
            <FontAwesomeIcon
                className="clickable hoverable mr-3"
                size="lg"
                icon={DATE_FILTERING_ICONS[filter.date.asc]}
                onClick={() =>
                    onChange('date', { asc: +!filter.date.asc })
                }
            />
            {/* <Dropdown
                className='myClassName'
                controlClassName='myControlClassName'
                options={options} value={defaultOption} placeholder="Select an option" />
            <p>{options}</p> */}
        </div>
    )
}

export default FilteringMenu;