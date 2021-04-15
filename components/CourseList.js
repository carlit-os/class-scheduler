import React, {useState} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector'
import CourseSelector from './CourseSelector'
import { hasConflict,getCourseTerm, getCourseNumber, terms} from '../utils/course';

const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');  //by default use Fall
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  
  return ( //consider View
      <ScrollView> 
        <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
        <CourseSelector courses={termCourses} />
      </ScrollView>
  );
};



const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      
});


export default CourseList;