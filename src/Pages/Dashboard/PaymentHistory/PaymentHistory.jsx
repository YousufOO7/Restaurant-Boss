import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SharedTitle from "../../Shared/SharedTitle/SharedTitle";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })

    return (
        <div>
            <SharedTitle heading={"Your all payment history"}></SharedTitle>

            <h2 className="text-4xl font-bold">My payments: {payments.length}</h2>

            <div className="mt-5 ">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>TransitionID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                payments.map((payment, idx) => <tr className="hover" key={payment._id}>
                                    <th>{idx + 1}</th>
                                    <td>${payment.price}</td>
                                    <td>{payment.transitionId}</td>
                                    <td>{payment.status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;