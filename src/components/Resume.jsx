import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    gap: 3
  },
  top: {
    marginLeft: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 24
  },
  section: {
    marginLeft: 30,
  },
  normal: {
    fontSize: 12,
    marginRight: 30,
  },
  normalHeadings: {
    fontSize: 12,
    padding: 4,
    marginRight: 30,
    color: 'white',
  },
  headingStyle: {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'rgb(50, 168, 82)',
    borderRadius: 5,
  }
})

export const Resume = ({useName, useEmail, usePhone, useAbout}) => {
  return (
    <Document>
        <Page style={styles.page}>
          <View style={styles.top}>
            <Text style={styles.title}>{useName}</Text>
            <Text style={styles.normal}>{useEmail}</Text>
            <Text style={styles.normal}>{usePhone}</Text>
          </View>
          <View style={styles.headingStyle}>
            <Text style={styles.normalHeadings}>About me</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.normal}>{useAbout}</Text>
          </View>
          <View style={styles.headingStyle}>
            <Text style={styles.normalHeadings}>Experience</Text>
          </View>
        </Page>
    </Document>
  )
}
