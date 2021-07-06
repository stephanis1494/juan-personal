import React, { useState } from 'react'
import styled from 'styled-components'
import XLSX from 'xlsx'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`

`

/* generate an array of column objects */
const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}));

const QRCode = () => {
  const [data, setData] = useState({})
  const [columns, setColumns] = useState({})

  React.useEffect(() => {
    console.log({ data, columns })
  }, [data, columns])

  const onChange = (e) => {
    const file = e.target?.files?.[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {type: 'binary'});
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, {header: 1});
      /* Update state */

      setData(data)
      setColumns(make_cols(ws['!ref']))
    }

    reader.readAsBinaryString(file)
  }

  return (
    <Container>
      <Input type='file' onChange={onChange} />
    </Container>
  )
}

export default QRCode
