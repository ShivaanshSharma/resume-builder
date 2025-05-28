import { Document, Page, Text } from '@react-pdf/renderer'
import React from 'react'

export const Resume = ({useName}) => {
  return (
    <Document>
        <Page>
            <Text>{useName}</Text>
        </Page>
    </Document>
  )
}
