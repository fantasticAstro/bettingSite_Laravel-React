import { ToastContainer, toast } from 'react-toastify';
import '../../../../node_modules/react-toastify/dist/ReactToastify.css' ;
function ToastNotification(pros) {
    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
      />
    )
}

export default ToastNotification ;