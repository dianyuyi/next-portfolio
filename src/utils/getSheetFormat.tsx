import React from 'react'

interface SheetProps {
  sheetName?: string
  rows?: Array<string | number | any>
}

const getSheetFormat = ({ sheetName, rows }: SheetProps) => {
  if (sheetName === 'StoreInfo') {
    const result = rows.map((row) => ({
      nameTW: row[0],
      nameEN: row[1],
      shortIntro: row[2] ?? '',
      phone: row[3] ?? '',
      address: row[4] ?? '',
    }))
    result.splice(0, 1)
    return result
  }
  if (sheetName === 'HomeImages') {
    const result = rows.map((row) => ({
      topLeft: row[0] ?? '',
      topRight: row[1] ?? '',
      centerFront: row[2] ?? '',
      centerBackground: row[3] ?? '',
      bottomLeft: row[4] ?? '',
      bottomRight: row[5] ?? '',
    }))
    result.splice(0, 1)
    return result
  }
  if (sheetName === 'Products') {
    const result = rows.map((row) => ({
      group: row[0] ?? '',
      id: row[1] ?? '',
      name: row[2] ?? '',
      note: row[3] ?? '',
      price: row[4] ?? 0,
      image: row[5] ?? '',
      description: row[6] ?? '',
      hot: row[7].toLowerCase() ?? 'false',
    }))
    result.splice(0, 1)
    return result
  }
}

export default getSheetFormat
