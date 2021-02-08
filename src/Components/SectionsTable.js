import React from 'react';

import purplecaret from '../images/caret-p-u-r-p-l-e.png';

function SectionsTable() {
    return (
        <div>
            <div className="home-sections-table">
                <p>SECTIONS</p>
                <table>
                    <tbody>
                        <tr>
                            <td className="border-top-none">Excecutive Summary</td>
                            <td className="border-top-none">Excecutive Summary</td>
                        </tr>
                        <tr>
                            <td>Market Analysis</td>
                            <td>Market Analysis</td>
                        </tr>
                        <tr>
                            <td>Supplier Analysis</td>
                            <td>Supplier Analysis</td>
                        </tr>
                        <tr>
                            <td>Cost Pricing Analysis</td>
                            <td>Cost Pricing Analysis</td>
                        </tr>
                        <tr>
                            <td>Procurement Best Practices</td>
                            <td>Procurement Best Practices</td>
                        </tr>
                        <tr>
                            <td className="border-bottom-none">Procurement for Dummies</td>
                            <td className="border-bottom-none">More <img src={purplecaret} alt="more-icon" /> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SectionsTable
