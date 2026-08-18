package com.miniproject.workout.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.miniproject.workout.domain.WorkoutRecord;

public interface WorkoutRecordRepository extends JpaRepository<WorkoutRecord, Long> {
}
