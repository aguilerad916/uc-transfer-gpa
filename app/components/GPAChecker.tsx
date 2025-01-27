'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Info } from 'lucide-react';
import { ucAdmissionsData, UCAdmissionData } from '../../data/ucAdmissionData';

export default function GPAChecker() {
  const [gpa, setGpa] = useState<string>('');
  const [major, setMajor] = useState<string>('');
  const [results, setResults] = useState<Array<{
    school: string;
    major: string;
    admitGPARange: [number, number];
    enrollGPARange: [number, number];
    admitRate: number;
  }> | null>(null);

  // Get unique majors across all schools
  const allMajors = new Set<string>();
  Object.values(ucAdmissionsData).forEach(schoolData => {
    Object.keys(schoolData).forEach(major => allMajors.add(major));
  });
  const majorsList = Array.from(allMajors).sort();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const gpaValue = parseFloat(gpa);
    const eligiblePrograms = [];

    // Check each school and major combination
    for (const [school, schoolData] of Object.entries(ucAdmissionsData)) {
      if (major) {
        // If major is selected, only check that specific major
        if (schoolData[major]) {
          const majorData = schoolData[major];
          if (gpaValue >= majorData.admitGPARange[0]) {
            eligiblePrograms.push({
              school,
              major,
              ...majorData
            });
          }
        }
      } else {
        // If no major selected, check all majors
        for (const [majorName, majorData] of Object.entries(schoolData)) {
          if (gpaValue >= majorData.admitGPARange[0]) {
            eligiblePrograms.push({
              school,
              major: majorName,
              ...majorData
            });
          }
        }
      }
    }

    setResults(eligiblePrograms.sort((a, b) => b.admitRate - a.admitRate));
  };

  return (
    <Card className="w-full max-w-md mx-auto p-9">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="gpa">GPA</Label>
            <Input
              type="number"
              id="gpa"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              min="0"
              max="4"
              step="0.01"
              required
              placeholder="Enter your GPA (e.g., 3.75)"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="major">Major</Label>
            <Select onValueChange={setMajor}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a major " />
              </SelectTrigger>
              <SelectContent>
                {majorsList.map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Find Eligible Programs</Button>
        </form>
      </CardContent>
      <CardFooter>
        {results ? (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Eligible Programs ({results.length})</AlertTitle>
            <AlertDescription className="whitespace-pre-line">
              {results.length > 0 ? (
                results.map(({ school, major, admitGPARange, enrollGPARange, admitRate }) => (
                  `${school} - ${major}\n` +
                  `Admit GPA range: ${admitGPARange[0].toFixed(2)} - ${admitGPARange[1].toFixed(2)}\n` +
                  `Enroll GPA range: ${enrollGPARange[0].toFixed(2)} - ${enrollGPARange[1].toFixed(2)}\n` +
                  `Admit rate: ${(admitRate * 100).toFixed(1)}%\n\n`
                )).join('')
              ) : 'No eligible programs found for your GPA.'}
            </AlertDescription>
          </Alert>
        ) : (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>No results yet</AlertTitle>

            <AlertDescription>
              Enter your GPA and optionally select a major, then click &quot;Find Eligible Programs&quot; to see matching UC programs.
            </AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}