import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getOne } from '../../API'
import styles from "./index.module.scss"
import { Helmet } from 'react-helmet'
const DetailMenu = () => {
  const { id } = useParams()
  const [getData, setGetData] = useState({
    name: "",
    title: "",
    number: ""
  })
  useEffect(() => {
    getOne(id).then((res) => {
      setGetData(res.data.data)
    })
  }, [id])
  return (

 <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Detail Page</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <div className={styles.detail}>
      <h6>{getData.name}</h6>
      <div className={styles.detail_flex}>
        <p>{getData.title}</p>
        <span>..........................................................................</span>
        <h5>${getData.number}</h5>
      </div >
      <button><Link to={"/"} style={{textDecoration:'none'}}>Go back</Link></button>


    </div>
 </>
  )
}

export default DetailMenu