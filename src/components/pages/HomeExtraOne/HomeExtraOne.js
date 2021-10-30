import React from 'react';
import switzerland from '../../../images/switzerland.jpg'
const HomeExtraOne = () => {
    return (
        <div>
            <img src={switzerland} className="img-fluid" alt="" />
            <h2 className="p-3 text-center">LAKE GENEVA SWITZERLAND</h2>
            <div className="d-flex p-4 border border-info m-3 rounded-3">
                <p>After the American Civil War, Lake Geneva became known as the “Newport of the West,” a popular year-round resort for wealthy Chicago residents who built summer homes and estates on the lake and in the wooded hills. <br /> <br /> Apart from a beautiful weather and beautiful and very clean old town, the Geneva lake is a must see. The Geneva Lake is quite long with wonderful marina port and fabulous fountain which is visible from many corners of Geneva city.</p>
                <h5><i>“It was fantastic going on the sled to see the views on the mountains! And the action of it – I loved going fast!”</i></h5>
            </div>
        </div>
    );
};

export default HomeExtraOne;