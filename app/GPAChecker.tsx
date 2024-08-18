'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Info } from 'lucide-react';

interface University {
  name: string;
  minGPA: number;
  maxGPA: number;
}

const universitiesData: University[] = [
  { name: 'UC Berkeley', minGPA: 3.7, maxGPA: 4.0 },
  { name: 'UCLA', minGPA: 3.6, maxGPA: 4.0 },
  { name: 'UC San Diego', minGPA: 3.5, maxGPA: 3.9 },
  { name: 'UC Santa Barbara', minGPA: 3.3, maxGPA: 3.8 },
  { name: 'UC Irvine', minGPA: 3.4, maxGPA: 3.9 },
];

const majors: string[] = ['Computer Science', 'Engineering', 'Biology', 'Business', 'Psychology'];

export default function GPAChecker() {
  const [gpa, setGpa] = useState<string>('');
  const [major, setMajor] = useState<string>('');
  const [results, setResults] = useState<University[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eligibleUniversities = universitiesData.filter(
      uni => parseFloat(gpa) >= uni.minGPA && parseFloat(gpa) <= uni.maxGPA
    );
    setResults(eligibleUniversities);
  };

  const handleGpaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGpa(e.target.value);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle>UC GPA Checker</CardTitle>
        <CardDescription>Check your UC eligibility based on GPA and major</CardDescription>
      </CardHeader>
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
              step="0.1"
              required
              placeholder="Enter your GPA (e.g., 3.5)"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="major">Major</Label>
            <Select onValueChange={setMajor} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a major" />
              </SelectTrigger>
              <SelectContent>
                {majors.map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Check Eligibility</Button>
        </form>
      </CardContent>
      <CardFooter>
        {results.length > 0 ? (
          <div className="w-full text-center">
            <h3 className="text-lg font-semibold mb-2">Eligible Universities:</h3>
            <ul className="space-y-2">
              {results.map((uni) => (
                <li key={uni.name} className="bg-secondary p-2 rounded-md">
                  {uni.name} (GPA range: {uni.minGPA} - {uni.maxGPA})
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>No results yet</AlertTitle>
            <AlertDescription>
              Enter your GPA and major, then click &quot;Check Eligibility&quot; to see matching universities.
            </AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}