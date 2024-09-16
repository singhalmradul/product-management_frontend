import { useDispatch, useSelector } from 'react-redux';
import { selectCateogries } from '../../store/category/category.selector';
import { useEffect } from 'react';
import { fetchCategoriesStart } from '../../store/category/category.slice';

const AddProduct = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, [dispatch]);

    const categories = useSelector(selectCateogries);
    return (
        <div>
            <h1>Add Product</h1>
            <form>
                <label htmlFor='code'>Code</label>
                <input type="text" placeholder='code' id='code' disabled />
                <label htmlFor='name'>Name</label>
                <input type="text" placeholder="name" id='name' />
                <label htmlFor='weight'>Weight</label>
                <input type="number" placeholder="weight" id='weight' />
                <input type="radio" name="unit" value="kg" id='kg' defaultChecked /> <label htmlFor='kg'>kg</label>
                <input type="radio" name="unit" value="g" id='g' /> <label htmlFor='g'>g</label>
                <br />
                Dimensions
                <label htmlFor='length'>Length</label>
                <input type="number" placeholder="length" id='length' /> inches
                <br />
                <label htmlFor='width'>Width</label>
                <input type="number" placeholder="width" id='width' /> inches
                <br />
                <label htmlFor='height'>Height</label>
                <input type="number" placeholder="height" id='height' /> inches
                <br />
                <label htmlFor='category'>Category</label>
                <select id='category'>
                    {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                </select>
                {/* <label>Variations</label> */}
                <label htmlFor='images'>Images</label>
                <input type="file" multiple id='images' />
                <label htmlFor='description'>Description</label>
                <textarea id='description' />
            </form>
            <button>Add</button>
            <button onClick={() => window.location.href = '/'}>Go Home</button>
        </div>
    );
};

export default AddProduct;