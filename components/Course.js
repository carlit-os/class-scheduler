import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { hasConflict,getCourseTerm, getCourseNumber, terms} from '../utils/course';

const Course = ({course, isDisabled, isSelected, select, view}) => (
    <TouchableOpacity style={styles[isSelected ? 'courseButtonSelected' : isDisabled? 'courseButtonDisabled':'courseButton']}
        onPress={() => { if (!isDisabled) select(course); }} 
        onLongPress={() => view(course)}>
      <Text style={styles.courseText}>
        {`CS ${getCourseNumber(course)}\n${course.meets}`}
      </Text>
    </TouchableOpacity>
);

/////styling/////////
const courseButtonBase = { //common styling options for a few elements
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
};

const styles = StyleSheet.create({
    courseButton: {
        ...courseButtonBase,   //spread operator
        backgroundColor: '#66b0ff'
    },
    courseButtonSelected: {
        ...courseButtonBase,   //spread operator
        backgroundColor: '#004a99'
    },
    courseButtonDisabled: {
        ...courseButtonBase,  //spread operator
        backgroundColor: '#d3d3d3'
    },
    courseText:{
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    }
});  

export default Course;