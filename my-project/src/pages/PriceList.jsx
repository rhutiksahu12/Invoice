import React from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Layout from '../Layout/Layout';
import { AiFillPrinter } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { IoToggleSharp } from "react-icons/io5";


const PriceList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [invoiceData, setInvoiceData] = useState([]);
    const [searchByProduct, setSearchByProduct] = useState('');
    const [searchById, setSearchById] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        setInvoiceData([...invoiceData, data]);
        setIsOpen(false);
        reset();
    };

    const filterData = (invoice) => {
        const productMatch = invoice['product'].toLowerCase().includes(searchByProduct.toLowerCase());
        return productMatch;
    };

    const filteredInvoiceData = invoiceData.filter(filterData);

    return (
        <>
            <div className='w-full px-5 my-8'>
                <div className='md:mx-10 flex flex-col md:flex-row  items-center justify-between my-8'>
                    <div className='grid gap-2 w-full'>
                        <div className='mb-4 md:mb-0'>
                            <input
                                type='search'
                                placeholder='Search Article No...'
                                value={searchByProduct}
                                onChange={(e) => setSearchByProduct(e.target.value)}
                                className='w-full md:w-80 border p-3 py-1 rounded-xl'
                            />
                        </div>
                        <div className='mb-4 md:mb-0'>
                            <input
                                type='search'
                                placeholder='Search Product...'
                                value={searchById}
                                onChange={(e) => setSearchById(e.target.value)}
                                className='w-full md:w-80 border p-3 py-1 rounded-xl'
                            />
                        </div>
                    </div>
                    <div className='flex item-center justify-around mt-4 sm:mt-0 md:justify-between w-full sm:w-auto gap-3'>
                        <div>
                            <button className='flex  items-center gap-1 shadow-md px-3 py-1 md:px-5 md:py-2 rounded-xl text-black/50 w-20 md:w-auto text-center' onClick={() => setIsOpen(true)}>
                                <span className='hidden md:block'>New Product</span>
                                <span className=' text-green-500 flex justify-center' ><IoMdAddCircle size={20} /></span>
                            </button>
                        </div>
                        <div>
                            <button className='flex items-center gap-1 shadow-md px-3 py-1 md:px-5 md:py-2 rounded-xl text-black/50 w-20 md:w-auto text-center' onClick={() => setIsOpen(true)}>
                                <span className='hidden md:block'>Price List</span>
                                <span className='flex justify-center text-cyan-400/60' ><AiFillPrinter size={20} /></span>
                            </button>
                        </div>
                        <div>
                            <button className='flex items-center gap-1 shadow-md px-3 py-1 md:px-5 md:py-2 rounded-xl text-black/50 w-20 md:w-auto text-center' onClick={() => setIsOpen(true)}>
                                <span className='hidden md:block'>Advanced Mobile</span>
                                <span className='flex justify-center text-cyan-400/60' ><IoToggleSharp size={20} /></span>
                            </button>
                        </div>
                    </div>
                </div>

                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='fixed z-10 inset-0 overflow-y-auto'>
                    <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                        <Dialog.Overlay className='fixed inset-0 bg-gray-500 opacity-75 transition-opacity' />
                        <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
                            &#8203;
                        </span>
                        <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                                <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                                    Add New Invoice
                                </Dialog.Title>
                                <div className='mt-2'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-4'>
                                            <label htmlFor='article_no' className='block text-gray-700 text-sm font-bold mb-2'>
                                                Article No.
                                            </label>
                                            <input
                                                {...register('article_no', { required: "This field can't be empty" })}
                                                className={`border rounded w-full py-2 px-3 ${errors['article_no'] ? 'border-red-500' : ''}`}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name='article_no'
                                                render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor='product' className='block text-gray-700 text-sm font-bold mb-2'>
                                                Product/Service
                                            </label>
                                            <input
                                                type='text'
                                                {...register('product', { required: true })}
                                                className={`border rounded w-full py-2 px-3 ${errors['product'] ? 'border-red-500' : ''}`}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name='product'
                                                render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor='in_price' className='block text-gray-700 text-sm font-bold mb-2'>
                                                In Price
                                            </label>
                                            <input
                                                type='text'
                                                {...register('in_price', { required: true })}
                                                className={`border rounded w-full py-2 px-3 ${errors['in_price'] ? 'border-red-500' : ''}`}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name='in_price'
                                                render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor='price' className='block text-gray-700 text-sm font-bold mb-2'>
                                                Price
                                            </label>
                                            <input
                                                type='text'
                                                {...register('price', { required: true })}
                                                className={`border rounded w-full py-2 px-3 ${errors['price'] ? 'border-red-500' : ''}`}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name='price'
                                                render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor='unit' className='block text-gray-700 text-sm font-bold mb-2'>
                                                Unit
                                            </label>
                                            <input
                                                name='unit'
                                                type='text'
                                                {...register('unit', { required: true })}
                                                className={`border rounded w-full py-2 px-3 ${errors['unit'] ? 'border-red-500' : ''}`}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name='unit'
                                                render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor='in_stock' className='block text-gray-700 text-sm font-bold mb-2'>
                                                In Stock
                                            </label>
                                            <input
                                                name='in_stock'
                                                type='text'
                                                {...register('in_stock', { required: true })}
                                                className={`border rounded w-full py-2 px-3 ${errors['in_stock'] ? 'border-red-500' : ''}`}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name='in_stock'
                                                render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor='description' className='block text-gray-700 text-sm font-bold mb-2'>
                                                Description
                                            </label>
                                            <input
                                                name='description'
                                                type='text'
                                                {...register('description', { required: true })}
                                                className={`border rounded w-full py-2 px-3 ${errors['description'] ? 'border-red-500' : ''}`}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name='description'
                                                render={({ message }) => <p className='text-red-500 text-sm'>{message}</p>}
                                            />
                                        </div>
                                        <div className='flex justify-between'>
                                            <button type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit}>
                                                Submit
                                            </button>
                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>

                <div className='overflow-x-auto'>
                    <table className='min-w-full table-auto border rounded-md overflow-hidden'>
                        <thead className='table-header-group text-black'>
                            <tr className='table-row'>
                                <th className='py-2 hidden  px-4 border-b'>Article No.</th>
                                <th className='py-2 px-4 border-b'>Product/Service</th>
                                <th className='py-2 hidden  px-4 border-b'>In Price</th>
                                <th className='py-2 px-4 border-b'>Price</th>
                                <th className='py-2 hidden  px-4 border-b'>Unit</th>
                                <th className='py-2 hidden  px-4 border-b'>In Stock</th>
                                <th className='py-2 hidden  px-4 border-b'>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInvoiceData.map((invoice, index) => (
                                <tr key={index} >
                                    <td className='py-2 hidden px-4 border-b text-center'>{invoice['article_no']}</td>
                                    <td className='py-2 px-4 border-b text-center'>{invoice['product']}</td>
                                    <td className='py-2 hidden px-4 border-b text-center'>{invoice['in_price']}</td>
                                    <td className='py-2 px-4 border-b text-center'>{invoice['price']}</td>
                                    <td className='py-2 hidden px-4 border-b text-center'>{invoice['unit']}</td>
                                    <td className='py-2 hidden px-4 border-b text-center'>{invoice['in_stock']}</td>
                                    <td className='py-2 hidden px-4 border-b text-center'>{invoice['description']}</td>
                                    {/* <td className='py-2 px-4 border-b'>Action</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PriceList;
