package com.miniproject.workout.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "WORKOUT_RECORD")
public class WorkoutRecord {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String exerciseName;

	private Double weight;

	private Integer reps;

	private Integer sets;

	protected WorkoutRecord() {
	}

	public WorkoutRecord(String exerciseName, Double weight, Integer reps, Integer sets) {
		this.exerciseName = exerciseName;
		this.weight = weight;
		this.reps = reps;
		this.sets = sets;
	}

	public Long getId() {
		return id;
	}

	public String getExerciseName() {
		return exerciseName;
	}

	public Double getWeight() {
		return weight;
	}

	public Integer getReps() {
		return reps;
	}

	public Integer getSets() {
		return sets;
	}
}
