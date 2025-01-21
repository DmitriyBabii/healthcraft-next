export interface TrainingCollection {
   id: number;
   type: TrainingType;
   trainings: Training[];
}

export interface Training {
   id: number;
   name: string;
   imageSrc: string;
   videoSrc: string;
}

export type TrainingType = 'WEIGHT_LOSS' | 'WEIGHT_GAIN' | 'STRETCHING';
