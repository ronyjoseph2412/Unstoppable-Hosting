import React from 'react'

export const Modal = ({myaccount,setModal}) => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full pt-3 '>
            <div className='h-full my-3 shadow shadow-black w-[500px] border border-slate-400 bg-white rounded-xl flex flex-col pt-5 pb-10'>
                <div className='flex flex-row border-b-2 border-black justify-between py-2'>
                    <div className='text-3xl  px-5'>My Account</div>
                    <div className='text-3xl cursor-pointer  px-5' onClick={()=>setModal(false)}><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></div>
                </div>
                <div className='flex flex-col items-start justify-start space-y-3 text-xl pt-3 px-5'>
                    <div className=''>Domain</div>
                    <div className='border border-slate-700 w-full py-1 px-2 rounded-lg'>{myaccount.sub}</div>
                </div>
                <div className='flex flex-col items-start justify-start space-y-3 text-xl pt-3 px-5'>
                    <div className=''>Wallet Address</div>
                    <div className='border border-slate-700 w-full py-1 px-2 rounded-lg'>{myaccount.wallet_address}</div>
                </div>
                <div className='flex flex-col items-start justify-start space-y-3 text-xl pt-3 px-5'>
                    <div className=''>Wallet Type</div>
                    <div className='border border-slate-700 w-full py-1 px-2 rounded-lg uppercase'>{myaccount.wallet_type_hint}</div>
                </div>
                <div className='flex flex-col items-start justify-start space-y-3 text-xl pt-3 px-5'>
                    <div className=''>Account ID</div>
                    <div className='border border-slate-700 w-full py-1 px-2 rounded-lg'>yathin017.x</div>
                </div>
            </div>
        </div>
    )
}
