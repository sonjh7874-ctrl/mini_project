package com.miniproject.workout.service;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.miniproject.workout.domain.WorkoutRecord;
import com.miniproject.workout.repository.WorkoutRecordRepository;

@Service
public class WorkoutRecordService {

	private final WorkoutRecordRepository workoutRecordRepository;

	public WorkoutRecordService(WorkoutRecordRepository workoutRecordRepository) {
		this.workoutRecordRepository = workoutRecordRepository;
	}

	public WorkoutRecord register(String exerciseName, Double weight, Integer reps, Integer sets) {
		WorkoutRecord workoutRecord = new WorkoutRecord(exerciseName, weight, reps, sets);
		return workoutRecordRepository.save(workoutRecord);
	}

	public List<WorkoutRecord> findAll() {
		return workoutRecordRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
	}
}
