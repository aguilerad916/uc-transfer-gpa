'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Info } from 'lucide-react';
import { ucAdmissionsData, UCAdmissionData } from '../../data/ucAdmissionData';

export default function GPAChecker() {
  const [gpa, setGpa] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [major, setMajor] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const schools = Object.keys(ucAdmissionsData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const gpaValue = parseFloat(gpa);
    const majorData = ucAdmissionsData[school][major];
    const [minAdmitGPA, maxAdmitGPA] = majorData.admitGPARange;
    
    if (gpaValue >= minAdmitGPA && gpaValue <= maxAdmitGPA) {
      setResult(`Eligible for ${major} at ${school}. 
        Admit GPA range: ${minAdmitGPA.toFixed(2)} - ${maxAdmitGPA.toFixed(2)}
        Enroll GPA range: ${majorData.enrollGPARange[0].toFixed(2)} - ${majorData.enrollGPARange[1].toFixed(2)}
        Admit rate: ${(majorData.admitRate * 100).toFixed(1)}%`);
    } else {
      setResult(`Not eligible for ${major} at ${school}. 
        Required admit GPA range: ${minAdmitGPA.toFixed(2)} - ${maxAdmitGPA.toFixed(2)}
        Your GPA: ${gpaValue.toFixed(2)}`);
    }
  };

  const handleGpaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGpa(e.target.value);
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
              onChange={handleGpaChange}
              min="0"
              max="4"
              step="0.01"
              required
              placeholder="Enter your GPA (e.g., 3.75)"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="school">UC School</Label>
            <Select onValueChange={setSchool} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a UC school" />
              </SelectTrigger>
              <SelectContent>
                {schools.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {school && (
            <div className="space-y-2">
              <Label htmlFor="major">Major</Label>
              <Select onValueChange={setMajor} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a major" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(ucAdmissionsData[school]).map((m) => (
                    <SelectItem key={m} value={m}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <Button type="submit" className="w-full">Check Eligibility</Button>
        </form>
      </CardContent>
      <CardFooter>
        {result ? (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Eligibility Result</AlertTitle>
            <AlertDescription className="whitespace-pre-line">{result}</AlertDescription>
          </Alert>
        ) : (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>No results yet</AlertTitle>
            <AlertDescription>
              Enter your GPA, select a UC school and major, then click &quot;Check Eligibility&quot; to see if you meet the criteria.
            </AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}