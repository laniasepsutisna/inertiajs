<?php

namespace App\Http\Controllers;

use App\Models\Ebook;
use Illuminate\Http\Request;

class EbookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Ebooks/Index', [
            'ebooks' => Ebook::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Ebooks/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'publisher' => 'required',
            'year' => 'required',
            'isbn' => 'required',
            'pages' => 'required',
            'language' => 'required',
            'size' => 'required',
        ]);

        //create post
        Ebook::create($request->all());

        //redirect
        return redirect()->route('ebooks.index')->with('success', 'Data Berhasil Disimpan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Ebook $ebook)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ebook $ebook)
    {
        return inertia('Ebooks/Edit', [
            'ebook' => $ebook,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ebook $ebook)
    {
        //set validation
        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'publisher' => 'required',
            'year' => 'required',
            'isbn' => 'required',
            'pages' => 'required',
            'language' => 'required',
            'size' => 'required',
        ]);

        //update post
        $ebook->update($request->all());

        //redirect
        return redirect()->route('ebooks.index')->with('success', 'Data Berhasil Diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ebook $ebook)
    {
        //delete post
        $ebook->delete();

        //redirect
        return redirect()->route('ebooks.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
