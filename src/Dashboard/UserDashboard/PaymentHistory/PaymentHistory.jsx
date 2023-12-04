import React from 'react';
import useEnrollClasses from '../../../Hooks/useEnrollClasses/useEnrollClasses';

const PaymentHistory = () => {
    const [enrollClasses] = useEnrollClasses();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    <thead>
                        <tr className="uppercase bg-orange-200">
                            <th>#</th>
                            <th>Email</th>
                            <th>language</th>
                            <th>TransactionId</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollClasses?.map((paymentsHistory, index) => {
                                return (
                                    <tr key={paymentsHistory._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {paymentsHistory.email}
                                        </td>
                                        <td>{paymentsHistory.name}</td>
                                        <td>{paymentsHistory.TransactionId}</td>
                                        <td className="font-bold">{paymentsHistory.date}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;