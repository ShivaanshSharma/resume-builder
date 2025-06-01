import { Document, Page, Text, StyleSheet, View, Font } from '@react-pdf/renderer'
import React from 'react';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    gap: 6,
    paddingBottom: 30,
    paddingTop: 30,
    paddingLeft: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  title2: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  normal: {
    fontSize: 11,
    marginRight: 30,
    fontWeight: 'normal',
    lineHeight: '1.4'
  },
  normalHeadings: {
    fontSize: 11,
    padding: 4,
    color: 'white',
  },
  headingStyle: {
    marginRight: 30,
    backgroundColor: 'rgb(60, 179, 113)',
    borderRadius: 5,
  },
  highlighted: {
    marginRight: 30,
    font: 'bold',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3
  },
  flexy: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export const Resume = ({useName, useEmail, usePhone, useAbout, useExperience, useProject, useEducation, useRole, useSkills, useExtras}) => {

  console.log(useProject);

  return (
    <Document>
        <Page style={styles.page}>
          <View style={styles.top}>
            <Text style={styles.title}>{useName}</Text>
            <Text style={styles.normal}>{useEmail}</Text>
            <Text style={styles.normal}>{usePhone}</Text>
            <Text style={styles.title2}>{useRole}</Text>
          </View>
          <View style={styles.headingStyle}>
            <Text style={styles.normalHeadings}>About me</Text>
          </View>
          <View>
            <Text style={styles.normal}>{useAbout}</Text>
          </View>
          { useExperience.length === 0 ? null :           
          <View style={styles.headingStyle}>
            <Text style={styles.normalHeadings}>Experience</Text>
          </View>}
          <View style={{flexDirection: 'column', gap: 6}}>
            { useExperience.map((exp) => {
              return (
                <View wrap={false}>
                  <View style={styles.flexy}>
                    <Text style={styles.highlighted}>{exp.title}</Text>
                    <Text style={styles.highlighted}>{exp.duration}</Text>
                  </View>
                  <View>
                    <Text style={styles.normal}>{exp.description}</Text>
                  </View>
                </View>
              )
            }) }
          </View>
          <View style={styles.headingStyle}>
            <Text style={styles.normalHeadings}>Projects</Text>
          </View>
          <View style={{flexDirection: 'column', gap: 6}}>
            { useProject.map((prj) => {
              return (
                <View wrap={false}>
                    <Text style={styles.highlighted}>{prj.name}</Text>
                    <View style={styles.section}>
                      <Text style={styles.normal}>{prj.description}</Text>
                    </View>
                </View>
              )
            }) }
          </View>

          <View style={styles.headingStyle}>
            <Text style={styles.normalHeadings}>Skills</Text>
          </View>
          <View>
            <Text style={styles.normal}>{useSkills}</Text>
          </View>

          <View style={styles.headingStyle}>
            <Text style={styles.normalHeadings}>Education</Text>
          </View>
          <View style={{flexDirection: 'column', gap: 6}}>
            { useEducation.map((edu) => {
              return (
                <View wrap={false}>
                    <Text style={styles.highlighted}>{edu.title}</Text>
                    <View style={styles.section}>
                      <Text style={styles.normal}>{edu.description}</Text>
                    </View>
                </View>
              )
            }) }
          </View>
          <View wrap={false} style={{flexDirection: 'column', gap: 6}}>
            <View style={styles.headingStyle}>
              <Text style={styles.normalHeadings}>Awards/Certificates/Language</Text>
            </View>
            <View>
              <Text style={styles.normal}>{useExtras}</Text>
            </View>
          </View>
        </Page>
    </Document>
  )
}
