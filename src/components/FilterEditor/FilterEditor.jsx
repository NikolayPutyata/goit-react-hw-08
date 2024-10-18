import { useDispatch, useSelector } from "react-redux";
import { selectQueryFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const FilterEditor = () => {
  const dispatch = useDispatch();

  const filterQuery = useSelector(selectQueryFilter);

  return (
    <div className="mb-4">
      <input
        type="text"
        name="query"
        value={filterQuery}
        placeholder="Enter name or number..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </div>
  );
};

export default FilterEditor;
