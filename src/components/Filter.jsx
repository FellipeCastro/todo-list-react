import './Filter.css'

export default function Filter(props) {
    return (
        <div className="select_container">
            <label htmlFor="filtrar">Filtrar: </label>
            <select name="filtrar" id="filtrar" value={props.filter} onChange={(e) => props.setFilter(e.target.value)}>
                <option value="all">Todos</option>
                <option value="complete">Completos</option>
                <option value="incomplete">Imcompletos</option>
            </select>
        </div>
    )
}