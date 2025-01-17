import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import toolbarOptions from './toolbarOptions';
import BlogService from './BlogService';
import { useParams } from 'react-router-dom';


const QuillEditor = () => {
  const [data, setData] = useState('');

  const { id } = useParams()

  const module = {
    toolbar: toolbarOptions,
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data) {
      alert("Write a blog to continue...");
    } else {
      const response = await BlogService.postBlog(id);
      console.log(response)

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <ReactQuill id='toolbar' className='m-auto mt-10 border-[24px] border-[#232222] rounded-2xl' modules={module} theme='snow' value={data} onChange={setData} />
      <div className="flex items-center justify-center">
        <button
          className="mx-6 my-12 text-2xl py-2 px-6 text-white  bg-lightBlack baseline
            cursor-pointer rounded-sm hover:bg-transparent hover:text-lightBlack
            border-2 hover: border-lightBlack"
        // onClick={() => handlePreviewClick(page)}
        >
          Preview
        </button>
        <button
          className="  text-2xl  py-2 px-6 text-white  bg-lightBlack baseline
            cursor-pointer rounded-sm hover:bg-transparent hover:text-lightBlack
            border-2 hover: border-lightBlack"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
      {console.log(data)}
    </form>
  )
}

export default QuillEditor