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
    fontWeight: 'normal'
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
  },
  highlighted: {
    marginLeft: 30,
    marginRight: 30,
    font: 'bold',
    fontSize: 12,
    fontWeight: 'bold'
  },
  flexy: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export const Resume = ({useName, useEmail, usePhone, useAbout, useExperience}) => {

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
          { useExperience.length === 0 ? null :           
          <View style={styles.headingStyle}>
            <Text style={styles.normalHeadings}>Experience</Text>
          </View>}
          <View style={{flexDirection: 'column', gap: 6}}>
            { useExperience.map((exp) => {
              return (
                <View>
                  <View style={styles.flexy}>
                    <Text style={styles.highlighted}>{exp.title}</Text>
                    <Text style={styles.highlighted}>{exp.duration}</Text>
                  </View>
                  <View style={{marginLeft: 30}}>
                    <Text style={styles.normal}>{exp.description}</Text>
                  </View>
                </View>
              )
            }) }
          </View>
          <View style={styles.headingStyle}>
            <Text style={styles.normalHeadings}>Projects</Text>
          </View>
        </Page>
    </Document>
  )
}
