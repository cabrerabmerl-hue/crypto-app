const FilterInput = ({filter, onfilterChange}) =>{
    return(
    <div classname="filter">
        <Input
        type="text"
        value={filter}
        placeholder="filter coins by name or symbol"
        onchange={(e) => onFilterchange(e.target.value)}
        />
        </div>
        )

        }


export default FilterInput